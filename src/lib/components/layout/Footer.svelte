<script lang="ts">
    import { Mail } from 'lucide-svelte';
</script>

<footer class="mt-16 border-t border-slate-200">
    <div class="max-w-6xl mx-auto py-12 px-6">
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Platform Info -->
            <div>
                <h3 class="text-sm font-semibold text-slate-900 mb-3">About Communiqué</h3>
                <p class="text-sm text-slate-600">
                    Message templates and delivery tools for effective civic engagement campaigns.
                </p>
            </div>

            <!-- Contact -->
            <div class="md:text-right">
                <h3 class="text-sm font-semibold text-slate-900 mb-3">Contact</h3>
                <a 
                    href="mailto:support@communique.com"
                    class="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
                >
                    <Mail class="w-4 h-4" />
                    hello@communi.email
                </a>
            </div>
        </div>

        <div class="mt-8 pt-8 border-t border-slate-200">
            <p class="text-center text-sm text-slate-500">
                © 2024 Communiqué — Preview Version
            </p>
        </div>
    </div>
</footer> 